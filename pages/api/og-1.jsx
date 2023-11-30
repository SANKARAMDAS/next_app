import { ImageResponse } from 'next/og';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export default async function GET(req) {
    const { searchParams } = new URL(req.url);
    const text = searchParams.get('text');
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'black',
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    padding: '50px 200px',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {text}
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}