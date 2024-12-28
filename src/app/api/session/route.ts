import { NextResponse } from 'next/server';

// Simulasi session dengan role
const mockSession = {
  user: {
    role: 'admin', // Ganti dengan 'user' untuk pengujian
  },
};

// Handler untuk metode GET
export async function GET() {
  const role = mockSession.user.role;

  if (role === 'admin') {
    return NextResponse.json({ message: 'Selamat datang, Admin!', role });
  } else if (role === 'user') {
    return NextResponse.json({ message: 'Selamat datang, User!', role });
  } else {
    return NextResponse.json(
      { error: 'Role tidak dikenali', role },
      { status: 403 }
    );
  }
}

// Handler untuk metode POST
export async function POST(request: Request) {
  const body = await request.json();

  if (!body || !body.data) {
    return NextResponse.json(
      { error: 'Permintaan tidak valid' },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: 'Data diterima',
    receivedData: body.data,
    role: mockSession.user.role, // Tambahkan role untuk informasi tambahan
  });
}

// Handler untuk metode HTTP yang tidak diizinkan
export function MethodNotAllowed() {
  return NextResponse.json(
    { error: 'Method Not Allowed' },
    { status: 405, headers: { Allow: 'GET, POST' } }
  );
}
