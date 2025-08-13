const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-db';

// User Schema (simplified for script)
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'reader'], default: 'reader' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

async function createAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const email = process.argv[2];
    const password = process.argv[3];
    const name = process.argv[4] || 'Admin User';

    if (!email || !password) {
      console.error('Usage: node setup-admin.js <email> <password> [name]');
      console.error('Example: node setup-admin.js admin@example.com mypassword "Admin User"');
      process.exit(1);
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exists. Updating role to admin...');
      existingUser.role = 'admin';
      await existingUser.save();
      console.log('User role updated to admin successfully!');
    } else {
      // Create new admin user
      const hashedPassword = await bcrypt.hash(password, 12);
      const adminUser = new User({
        name,
        email,
        password: hashedPassword,
        role: 'admin',
      });

      await adminUser.save();
      console.log('Admin user created successfully!');
    }

    console.log('Setup complete!');
    console.log('You can now sign in at /auth/signin');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.disconnect();
  }
}

createAdminUser();
