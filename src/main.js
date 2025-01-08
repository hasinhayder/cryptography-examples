import '../style.css'
import Alpine from 'alpinejs'
import CryptoJS from 'crypto-js'

window.Alpine = Alpine

Alpine.data('cryptoApp', () => ({
  input: 'Nothing lasts forever. So live it up, drink it down, laugh it off, avoid the bullshit, take chances, and never have regrets, because at one point everything you did was exactly what you wanted.',
  output: '',
  key: '',
  selectedMethod: 'base64',
  
  methods: [
    {
      id: 'base64',
      name: 'Base64 Encoding',
      description: 'Base64 is an encoding scheme that represents binary data in ASCII string format - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Base64" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: true
    },
    {
      id: 'caesar',
      name: 'Caesar Cipher',
      description: 'A simple substitution cipher that shifts letters by a fixed number (key: 1-25) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Caesar_cipher" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: '3'
    },
    {
      id: 'vigenere',
      name: 'Vigenère Cipher',
      description: 'A polyalphabetic substitution cipher using a keyword - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: 'LEMON'
    },
    {
      id: 'atbash',
      name: 'Atbash Cipher',
      description: 'A substitution cipher where each letter is replaced with its opposite position in the alphabet (A→Z, B→Y, etc) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Atbash" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: true
    },
    {
      id: 'rot13',
      name: 'ROT13 Cipher',
      description: 'A special case of the Caesar cipher with a fixed shift of 13 places - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/ROT13" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: true
    },
    {
      id: 'morse',
      name: 'Morse Code',
      description: 'Encodes text as dots and dashes - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Morse_code" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: true
    },
    {
      id: 'md5',
      name: 'MD5 Hash',
      description: 'A widely used hash function producing a 128-bit hash value (not recommended for secure hashing) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/MD5" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'sha1',
      name: 'SHA-1',
      description: 'A 160-bit hash function (not recommended for secure hashing) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/SHA-1" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'sha256',
      name: 'SHA-256',
      description: 'A secure hash algorithm that produces a 256-bit (32-byte) hash value - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/SHA-2" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'sha512',
      name: 'SHA-512',
      description: 'A secure hash algorithm that produces a 512-bit (64-byte) hash value - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/SHA-2" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'sha3',
      name: 'SHA-3',
      description: 'The latest member of the Secure Hash Algorithm family - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/SHA-3" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'ripemd160',
      name: 'RIPEMD-160',
      description: 'A cryptographic hash function that produces a 160-bit hash value - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/RIPEMD" target="_blank">Learn more from wikipedia</a>',
      requiresKey: false,
      canDecrypt: false
    },
    {
      id: 'aes',
      name: 'AES Encryption',
      description: 'Advanced Encryption Standard - a symmetric encryption algorithm - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: CryptoJS.lib.WordArray.random(16).toString()
    },
    {
      id: 'des',
      name: 'DES Encryption',
      description: 'Data Encryption Standard (legacy, not recommended for secure applications) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Data_Encryption_Standard" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: CryptoJS.lib.WordArray.random(8).toString()
    },
    {
      id: 'tripledes',
      name: 'Triple DES',
      description: 'Applies DES cipher algorithm three times to each data block - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Triple_DES" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: CryptoJS.lib.WordArray.random(24).toString()
    },
    {
      id: 'rc4',
      name: 'RC4 Stream Cipher',
      description: 'A stream cipher (not recommended for secure applications) - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/RC4" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: CryptoJS.lib.WordArray.random(16).toString()
    },
    {
      id: 'rabbit',
      name: 'Rabbit Stream Cipher',
      description: 'A high-performance stream cipher - <a class="text-blue-500 hover:underline" href="https://en.wikipedia.org/wiki/Rabbit_(cipher)" target="_blank">Learn more from wikipedia</a>',
      requiresKey: true,
      canDecrypt: true,
      exampleKey: CryptoJS.lib.WordArray.random(16).toString()
    }
  ],

  get currentMethod() {
    return this.methods.find(m => m.id === this.selectedMethod)
  },

  copyToInput() {
    this.input = this.output
    this.output = ''
  },

  generateExampleKey() {
    this.key = this.currentMethod.exampleKey
  },

  clearOutput() {
    this.output = ''
  },

  morseCode: {
    encode: {
      'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
      'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
      'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
      'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
      'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
      '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
      '8': '---..', '9': '----.', ' ': '/'
    },
    decode: null
  },

  initMorseDecodeMap() {
    if (!this.morseCode.decode) {
      this.morseCode.decode = Object.entries(this.morseCode.encode).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
      }, {});
    }
  },

  encrypt() {
    switch(this.selectedMethod) {
      case 'base64':
        this.output = btoa(this.input)
        break
      case 'caesar':
        this.output = this.caesarCipher(this.input, parseInt(this.key) || 3)
        break
      case 'vigenere':
        this.output = this.vigenereCipher(this.input, this.key, true)
        break
      case 'atbash':
        this.output = this.atbashCipher(this.input)
        break
      case 'rot13':
        this.output = this.caesarCipher(this.input, 13)
        break
      case 'morse':
        this.output = this.input.toUpperCase().split('').map(char => 
          this.morseCode.encode[char] || char
        ).join(' ')
        break
      case 'md5':
        this.output = CryptoJS.MD5(this.input).toString()
        break
      case 'sha1':
        this.output = CryptoJS.SHA1(this.input).toString()
        break
      case 'sha256':
        this.output = CryptoJS.SHA256(this.input).toString()
        break
      case 'sha512':
        this.output = CryptoJS.SHA512(this.input).toString()
        break
      case 'sha3':
        this.output = CryptoJS.SHA3(this.input).toString()
        break
      case 'ripemd160':
        this.output = CryptoJS.RIPEMD160(this.input).toString()
        break
      case 'aes':
        this.output = CryptoJS.AES.encrypt(this.input, this.key).toString()
        break
      case 'des':
        this.output = CryptoJS.DES.encrypt(this.input, this.key).toString()
        break
      case 'tripledes':
        this.output = CryptoJS.TripleDES.encrypt(this.input, this.key).toString()
        break
      case 'rc4':
        this.output = CryptoJS.RC4.encrypt(this.input, this.key).toString()
        break
      case 'rabbit':
        this.output = CryptoJS.Rabbit.encrypt(this.input, this.key).toString()
        break
    }
  },

  decrypt() {
    switch(this.selectedMethod) {
      case 'base64':
        try {
          this.output = atob(this.input)
        } catch (e) {
          this.output = 'Invalid Base64 input'
        }
        break
      case 'caesar':
        this.output = this.caesarCipher(this.input, -(parseInt(this.key) || 3))
        break
      case 'vigenere':
        this.output = this.vigenereCipher(this.input, this.key, false)
        break
      case 'atbash':
        this.output = this.atbashCipher(this.input)
        break
      case 'rot13':
        this.output = this.caesarCipher(this.input, 13)
        break
      case 'morse':
        this.initMorseDecodeMap()
        this.output = this.input.split(' ').map(code => 
          this.morseCode.decode[code] || code
        ).join('')
        break
      case 'aes':
        try {
          const bytes = CryptoJS.AES.decrypt(this.input, this.key)
          this.output = bytes.toString(CryptoJS.enc.Utf8)
        } catch (e) {
          this.output = 'Decryption failed. Check your key and input.'
        }
        break
      case 'des':
        try {
          const bytes = CryptoJS.DES.decrypt(this.input, this.key)
          this.output = bytes.toString(CryptoJS.enc.Utf8)
        } catch (e) {
          this.output = 'Decryption failed. Check your key and input.'
        }
        break
      case 'tripledes':
        try {
          const bytes = CryptoJS.TripleDES.decrypt(this.input, this.key)
          this.output = bytes.toString(CryptoJS.enc.Utf8)
        } catch (e) {
          this.output = 'Decryption failed. Check your key and input.'
        }
        break
      case 'rc4':
        try {
          const bytes = CryptoJS.RC4.decrypt(this.input, this.key)
          this.output = bytes.toString(CryptoJS.enc.Utf8)
        } catch (e) {
          this.output = 'Decryption failed. Check your key and input.'
        }
        break
      case 'rabbit':
        try {
          const bytes = CryptoJS.Rabbit.decrypt(this.input, this.key)
          this.output = bytes.toString(CryptoJS.enc.Utf8)
        } catch (e) {
          this.output = 'Decryption failed. Check your key and input.'
        }
        break
    }
  },

  caesarCipher(str, shift) {
    return str
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0)
          const isUpperCase = code >= 65 && code <= 90
          const base = isUpperCase ? 65 : 97
          return String.fromCharCode(
            ((code - base + shift + 26) % 26) + base
          )
        }
        return char
      })
      .join('')
  },

  atbashCipher(str) {
    return str
      .split('')
      .map(char => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0)
          const isUpperCase = code >= 65 && code <= 90
          const base = isUpperCase ? 65 : 97
          return String.fromCharCode(
            base + (25 - (code - base))
          )
        }
        return char
      })
      .join('')
  },

  vigenereCipher(str, key, encrypt) {
    key = key.toUpperCase().replace(/[^A-Z]/g, '')
    if (!key) return str
    
    return str
      .split('')
      .map((char, i) => {
        if (char.match(/[a-z]/i)) {
          const isUpperCase = char === char.toUpperCase()
          const keyChar = key[i % key.length]
          const shift = keyChar.charCodeAt(0) - 65
          const base = isUpperCase ? 65 : 97
          const charCode = char.toUpperCase().charCodeAt(0) - 65
          const shifted = encrypt
            ? (charCode + shift) % 26
            : (charCode - shift + 26) % 26
          const newChar = String.fromCharCode(shifted + 65)
          return isUpperCase ? newChar : newChar.toLowerCase()
        }
        return char
      })
      .join('')
  }
}))

Alpine.start()