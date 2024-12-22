# React 18+ Automatic Batching Bug

This repository demonstrates a subtle bug that can occur in React 18 and later versions due to the introduction of automatic batching of state updates.  The bug showcases how multiple state updates within a single event handler might not render immediately.  The solution provides a method to bypass the automatic batching mechanism and ensure the expected behavior.

## Bug Description

The `bug.js` file contains a simple counter component.  While it seems to function correctly at first, the automatic batching can lead to unexpected behavior, which is not apparent on the surface.  This can cause serious inconsistencies when building complex application.