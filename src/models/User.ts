import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: 'admin' | 'reader';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false, // Not required for OAuth users
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: ['admin', 'reader'],
      default: 'reader',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate model initialization
export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
