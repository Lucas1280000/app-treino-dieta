import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Força a rota a ser dinâmica (não fazer build-time rendering)
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(url, key);
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    const body = await request.json();

    // Lógica do webhook Kirvano
    // Exemplo:
    // await supabase.from("payments").insert({ data: body });

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (e) {
    console.error("Webhook error:", e);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Webhook endpoint' }, { status: 200 });
}
