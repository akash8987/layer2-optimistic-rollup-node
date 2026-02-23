// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title RollupChain
 * @dev L1 contract to store L2 state commitments.
 */
contract RollupChain {
    struct Batch {
        bytes32 stateRoot;
        uint256 timestamp;
        address sequencer;
    }

    mapping(uint256 => Batch) public batches;
    uint256 public totalBatches;
    uint256 public constant CHALLENGE_WINDOW = 7 days;

    event BatchSubmitted(uint256 indexed batchId, bytes32 stateRoot);

    function appendBatch(bytes32 _stateRoot) external {
        batches[totalBatches] = Batch({
            stateRoot: _stateRoot,
            timestamp: block.timestamp,
            sequencer: msg.sender
        });
        
        emit BatchSubmitted(totalBatches, _stateRoot);
        totalBatches++;
    }

    function challengeBatch(uint256 _batchId) external {
        require(block.timestamp <= batches[_batchId].timestamp + CHALLENGE_WINDOW, "Window closed");
        // Logic for fraud proof verification would trigger here
    }
}
