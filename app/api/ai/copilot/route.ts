import { NextRequest, NextResponse } from 'next/server';

import { type AIRequest, generateAIResponse } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract AI request parameters
    const aiRequest: AIRequest = {
      prompt: body.prompt || body.input || 'Hello',
      context: body.context,
      maxTokens: body.maxTokens || body.max_tokens || 150,
      temperature: body.temperature || 0.7,
      model: body.model || 'gpt-3.5-turbo',
    };

    // Generate AI response
    const response = await generateAIResponse(aiRequest);

    return NextResponse.json(response);
  } catch (error) {
    console.error('Copilot API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    {
      message: 'Copilot API endpoint is active. Use POST to interact with AI.',
      status: 'ready',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
