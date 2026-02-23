# Layer 2 Optimistic Rollup Node

A professional-grade framework for understanding and building Layer 2 scaling solutions. This repository provides a simplified sequencer and relayer architecture that aggregates transactions into batches and commits them to an L1 smart contract.

## Technical Pillars
* **Batching**: Collects multiple off-chain transactions into a single compressed calldata blob.
* **State Roots**: Calculates and submits Merkle Roots of the L2 state to the Canonical Transaction Chain (CTC) on L1.
* **Fraud Proofs**: Implements a logical challenge period where verifiers can dispute invalid state transitions.
* **Gas Efficiency**: Uses custom serialization to minimize L1 footprint.

## Workflow
1. **Sequencer**: Receives transactions and orders them.
2. **State Transition**: Updates the local L2 database.
3. **L1 Submission**: Periodically pushes the batch and the resulting state root to Ethereum.

## Security
This is a reference implementation. Production rollups require complex interactive fraud proofs or ZK-circuits for immediate finality.
