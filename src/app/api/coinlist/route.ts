// app/api/coinlist/route.ts
export async function GET() {
    const res = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=15',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY!,
        },
      }
    );
  
    if (!res.ok) {
      return new Response('Failed to fetch CoinMarketCap data', { status: 500 });
    }
  
    const data = await res.json();
    return Response.json(data);
  }
  