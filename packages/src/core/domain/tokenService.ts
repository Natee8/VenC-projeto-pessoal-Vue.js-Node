import * as crypto from 'crypto';
import { IToken } from '../../../../apps/service/src/core/interface/IToken.js'

export class TokenService {
  private secret = process.env.JWT_SECRET || 'your-secret-key';

  generateToken(data: Partial<IToken> & { type?: 'ACCESS' | 'REFRESH' }): string {
    const tokenType = data.type || 'ACCESS';
    const exp = Math.floor(Date.now() / 1000) + (tokenType === 'REFRESH' ? 7*24*60*60 : 24*60*60);
    
    const payload: IToken = {
      ...data,
      type: tokenType,
      iat: Math.floor(Date.now()/1000),
      exp
    } as IToken;

    const payloadStr = JSON.stringify(payload);
    const signature = this.createSignature(payloadStr);
    const encodedPayload = Buffer.from(payloadStr).toString('base64');
    return `${encodedPayload}.${signature}`;
  }

  verifyToken(token: string): IToken | null {
    const [encodedPayload, signature] = token.split('.');
    if (!encodedPayload || !signature) return null;

    const payloadStr = Buffer.from(encodedPayload, 'base64').toString('utf8');
    if (this.createSignature(payloadStr) !== signature) return null;

    const payload = JSON.parse(payloadStr) as IToken;
    if (payload.exp < Math.floor(Date.now()/1000)) return null;

    return payload;
  }

  private createSignature(payloadStr: string): string {
    return crypto.createHmac('sha256', this.secret).update(payloadStr).digest('hex');
  }
}