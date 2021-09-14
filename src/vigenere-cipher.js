import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    [message, key] = this.processInput(message, key);
    let encryptedMessage = '';
    let pattern = this.specialSymbolsRegexPattern();
    let specialSymbolsCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (pattern.test(message[i])) {
        encryptedMessage += message[i];
        specialSymbolsCount++;
      } else {
        let newCharCode = (message.codePointAt(i) + key.codePointAt(i - specialSymbolsCount) - 65);
        if (newCharCode > 90) newCharCode = newCharCode - 26;
        encryptedMessage += String.fromCharCode(newCharCode);
      }
    }
    return (this.direct) ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }
  decrypt(message, key) {
    [message, key] = this.processInput(message, key);
    let decryptedMessage = '';
    let pattern = this.specialSymbolsRegexPattern();
    let specialSymbolsCount = 0;
    for (let i = 0; i < message.length; i++) {
      if (pattern.test(message[i])) {
        decryptedMessage += message[i];
        specialSymbolsCount++;
      } else {
        let newCharCode = (message.codePointAt(i) - key.codePointAt(i - specialSymbolsCount) + 65);
        if (newCharCode < 65) newCharCode = newCharCode + 26;
        decryptedMessage += String.fromCharCode(newCharCode);
      }
    }
    return (this.direct) ? decryptedMessage : decryptedMessage.split("").reverse().join("");
  }
  constructKey(message, key) {
    if (key.length >= message.length) return key.slice(0, key.length).toUpperCase();
    else if (key.length < message.length) {
      return key.repeat(Math.ceil(message.length / key.length)).slice(0, message.length).toUpperCase();
    }
  }
  specialSymbolsRegexPattern(){
    return new RegExp(/[^a-zA-Z]/);
  }
  processInput(message, key) {
    if (message === undefined || key === undefined) throw Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = this.constructKey(message, key);
    return [message, key];
  }
}