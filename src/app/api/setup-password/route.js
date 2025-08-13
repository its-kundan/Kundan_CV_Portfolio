import { hashPassword, validatePassword, generateSecurePassword } from '@/lib/auth';

export async function POST(request) {
  try {
    const { password, action } = await request.json();

    if (action === 'generate') {
      // Generate a secure password
      const newPassword = generateSecurePassword(16);
      const hashedPassword = await hashPassword(newPassword);
      
      return Response.json({
        success: true,
        password: newPassword,
        hashedPassword: hashedPassword,
        message: 'Secure password generated successfully'
      });
    }

    if (action === 'hash') {
      // Hash a provided password
      if (!password) {
        return Response.json(
          { error: 'Password is required' },
          { status: 400 }
        );
      }

      // Validate password strength
      const validation = validatePassword(password);
      if (!validation.isValid) {
        return Response.json({
          error: 'Password does not meet security requirements',
          details: validation.errors
        }, { status: 400 });
      }

      const hashedPassword = await hashPassword(password);
      
      return Response.json({
        success: true,
        hashedPassword: hashedPassword,
        message: 'Password hashed successfully'
      });
    }

    if (action === 'validate') {
      // Validate password strength
      if (!password) {
        return Response.json(
          { error: 'Password is required' },
          { status: 400 }
        );
      }

      const validation = validatePassword(password);
      
      return Response.json({
        success: true,
        isValid: validation.isValid,
        errors: validation.errors,
        message: validation.isValid ? 'Password meets security requirements' : 'Password needs improvement'
      });
    }

    return Response.json(
      { error: 'Invalid action. Use "generate", "hash", or "validate"' },
      { status: 400 }
    );

  } catch (error) {
    console.error('Error in password setup:', error);
    return Response.json(
      { error: 'Failed to process password' },
      { status: 500 }
    );
  }
}
