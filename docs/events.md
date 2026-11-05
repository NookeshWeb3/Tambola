# Socket Events Documentation

This document tracks all socket events used in the Tambola application.

## Connection
- `connect`: Fired when a client connects to the server.
- `disconnect`: Fired when a client disconnects from the server.

## Room Management
(To be implemented)
- `createRoom`: Request to create a new room.
- `joinRoom`: Request to join a room via code.

## Game Logic
(To be implemented)
- `drawNumber`: Admin triggers the next number.
- `markNumber`: Player marks a number on their ticket.
- `claimPrize`: Automatic server check for prizes.
