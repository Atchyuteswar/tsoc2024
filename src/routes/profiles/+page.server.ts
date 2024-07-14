import { db } from '$lib/database';
import { fail, type Actions } from '@sveltejs/kit';

export async function load() {
  try {
    const users = await db.user.findMany();
    return {
      names: users,
    };
  } catch (error) {
    console.error(error);
    return;
  }
}

export const actions: Actions = {
  updateUser: async ({ request }) => {
    const formData = await request.formData();
    const userEmail = formData.get('email') as string;
    const userName = formData.get('name') as string;
    const userId = Number(formData.get('id') || '');

    if (
      typeof userEmail !== 'string' ||
      typeof userName !== 'string' ||
      isNaN(userId)
    ) {
      return fail(400, {
        error: true,
        message:
          'Input validation failed. Ensure all fields are correctly formatted.',
      });
    }

    await db.user.update({
      where: { id: userId },
      data: { name: userName, email: userEmail },
    });
  },

  deleteUser: async ({ request }) => {
    const formData = await request.formData();
    const userId = Number(formData.get('id') || '');

    const existingUser = await db.user.findFirst({ where: { id: userId } });
    if (!existingUser) {
      return fail(400, {
        error: true,
        message: 'User not found. Cannot perform deletion.',
      });
    }

    await db.user.delete({ where: { id: userId } });
    return { success: true };
  },

  createUser: async ({ request }) => {
    const formData = await request.formData();
    const userEmail = String(formData.get('email') || '');
    const userName = String(formData.get('name') || '');

    const userExists = await db.user.findUnique({
      where: { email: userEmail },
    });
    if (userExists) {
      return fail(400, {
        error: true,
        message: 'User already exists. Choose a different username or email.',
      });
    }

    await db.user.create({ data: { email: userEmail, name: userName } });
    return { success: true };
  },
};
