const { ethers } = require("ethers");
require("dotenv").config();

// 

class Sequencer {
    constructor() {
        this.mempool = [];
        this.stateRoot = ethers.ZeroHash;
        this.batchInterval = 5000; // 5 seconds
    }

    receiveTransaction(tx) {
        console.log(`Received L2 Transaction: ${tx.hash}`);
        this.mempool.push(tx);
    }

    async produceBatch() {
        if (this.mempool.length === 0) return;

        console.log(`Processing batch of ${this.mempool.length} transactions...`);
        
        // 1. Logic to update local state and generate new state root
        const batchData = ethers.hexlify(ethers.toUtf8Bytes(JSON.stringify(this.mempool)));
        
        // 2. Submit to L1 (Mock implementation)
        await this.submitToL1(batchData);

        this.mempool = [];
    }

    async submitToL1(data) {
        console.log("Submitting batch to L1 Canonical Transaction Chain...");
        // In a real scenario, this calls a contract function on L1 via ethers.js
        console.log(`L1 Calldata: ${data.substring(0, 64)}...`);
    }
}

const node = new Sequencer();
setInterval(() => node.produceBatch(), 5000);
