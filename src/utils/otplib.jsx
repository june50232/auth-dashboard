/**
 * otplib-preset-browser
 *
 * Provides fully initialised classes that are targeted
 * for a browser build.
 *
 * Uses:
 *
 * - Base32: 'plugin-base32-enc-dec'
 * - Crypto: 'plugin-crypto-js'
 */
import { createDigest, createRandomBytes } from '@otplib/plugin-crypto-js';
import { keyDecoder, keyEncoder } from '@otplib/plugin-base32-enc-dec';
import {
  Authenticator,
} from '@otplib/core';
import buffer from 'buffer/'

// @ts-ignore
if (typeof window === 'object' && typeof window.Buffer === 'undefined') {
  // @ts-ignore
  // var Buffer = require('buffer/').Buffer
  window.Buffer = buffer.Buffer; /* globals buffer */
}

export const authenticator = new Authenticator({
  createDigest,
  createRandomBytes,
  keyDecoder,
  keyEncoder
});