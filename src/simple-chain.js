import {NotImplementedError} from '../extensions/index.js';

let chainMaker;
/**
 * Implement chainMaker object according to task description
 *
 */
export default chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(String(value));
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.chain.length - 1 || !Number(position)) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
      this.chain.reverse();
      return this;
    },
    finishChain() {
      let result = '( ' + this.chain.join(' )~~( ') + ' )';
      this.chain = [];
      return result;
    }
};

// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink());
