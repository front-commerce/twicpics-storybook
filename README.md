## Getting Started

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Run the test:

    ```bash
    npm run test
    ```
## Issues

When running tests the storybook seems to fail for the [TwicPics component](https://github.com/front-commerce/twicpics-storybook/blob/main/src/stories/TwicPics.stories.js).

```bash
   FAIL  src/stories/storybook.test.js
  ● Console

    console.warn
      twicpics-components ResizeObserver not found

      1 | import React from "react";
      2 | import PropTypes from "prop-types";
    > 3 | import { installTwicPics, TwicImg } from "@twicpics/components/react";
        | ^
      4 |
      5 | import "./TwicPics.css";
      6 |

      at focus (node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/_/utils.ts:40:42)
      at Object.<anonymous> (node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/react/factory.tsx:37:5)
      at Object.<anonymous> (src/stories/TwicPics.jsx:3:1)

    console.error
      Error: Uncaught [TypeError: Object.defineProperty called on non-object]
          at reportException (/User/Projects/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
          at innerInvokeEventListeners (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:341:9)
          at invokeEventListeners (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
          at HTMLUnknownElementImpl._dispatch (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
          at HTMLUnknownElementImpl.dispatchEvent (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
          at HTMLUnknownElement.dispatchEvent (/User/Projects/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
          at Object.invokeGuardedCallbackDev (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11440:16)
          at invokeGuardedCallback (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11499:31)
          at commitRootImpl (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14172:9)
          at unstable_runWithPriority (/User/Projects/node_modules/scheduler/cjs/scheduler.development.js:468:12) TypeError: Object.defineProperty called on non-object
          at Function.defineProperty (<anonymous>)
          at Object.setWrapper (/User/Projects/node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/_/placeholder.ts:21:34)
          at n.componentDidMount (/User/Projects/node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/react/factory.tsx:111:13)
          at commitLifeCycles (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11782:24)
          at commitLayoutEffects (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14443:7)
          at HTMLUnknownElement.callCallback (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11391:14)
          at HTMLUnknownElement.callTheUserObjectsOperation (/User/Projects/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
          at innerInvokeEventListeners (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
          at invokeEventListeners (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
          at HTMLUnknownElementImpl._dispatch (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
          at HTMLUnknownElementImpl.dispatchEvent (/User/Projects/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
          at HTMLUnknownElement.dispatchEvent (/User/Projects/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
          at Object.invokeGuardedCallbackDev (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11440:16)
          at invokeGuardedCallback (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11499:31)
          at commitRootImpl (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14172:9)
          at unstable_runWithPriority (/User/Projects/node_modules/scheduler/cjs/scheduler.development.js:468:12)
          at runWithPriority (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2486:10)
          at commitRoot (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14011:3)
          at performSyncWorkOnRoot (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13440:3)
          at /User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2537:26
          at unstable_runWithPriority (/User/Projects/node_modules/scheduler/cjs/scheduler.development.js:468:12)
          at runWithPriority (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2486:10)
          at flushSyncCallbackQueueImpl (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2532:9)
          at flushSyncCallbackQueue (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2519:3)
          at scheduleUpdateOnFiber (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13004:9)
          at updateContainer (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:16454:3)
          at create (/User/Projects/node_modules/react-test-renderer/cjs/react-test-renderer.development.js:17149:3)
          at getRenderedTree (/User/Projects/node_modules/@storybook/addon-storyshots/dist/ts3.9/frameworks/react/renderTree.js:24:16)
          at /User/Projects/node_modules/@storybook/addon-storyshots/dist/ts3.9/test-bodies.js:11:22
          at Object.<anonymous> (/User/Projects/node_modules/@storybook/addon-storyshots/dist/ts3.9/api/snapshotsTestsTemplate.js:47:20)
          at Promise.then.completed (/User/Projects/node_modules/jest-circus/build/utils.js:391:28)
          at new Promise (<anonymous>)
          at callAsyncCircusFn (/User/Projects/node_modules/jest-circus/build/utils.js:316:10)
          at _callCircusTest (/User/Projects/node_modules/jest-circus/build/run.js:218:40)
          at processTicksAndRejections (node:internal/process/task_queues:96:5)
          at _runTest (/User/Projects/node_modules/jest-circus/build/run.js:155:3)
          at _runTestsForDescribeBlock (/User/Projects/node_modules/jest-circus/build/run.js:66:9)
          at _runTestsForDescribeBlock (/User/Projects/node_modules/jest-circus/build/run.js:60:9)
          at _runTestsForDescribeBlock (/User/Projects/node_modules/jest-circus/build/run.js:60:9)
          at run (/User/Projects/node_modules/jest-circus/build/run.js:25:3)
          at runAndTransformResultsToJestFormat (/User/Projects/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:170:21)
          at jestAdapter (/User/Projects/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:82:19)
          at runTestInternal (/User/Projects/node_modules/jest-runner/build/runTest.js:389:16)
          at runTest (/User/Projects/node_modules/jest-runner/build/runTest.js:475:34)
          at Object.worker (/User/Projects/node_modules/jest-runner/build/testWorker.js:133:12)

      at VirtualConsole.<anonymous> (node_modules/jsdom/lib/jsdom/virtual-console.js:29:45)
      at reportException (node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:341:9)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)

    console.error
      The above error occurred in the <n> component:
      
          at n (/User/Projects/node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/_/placeholder.ts:85:21)
          at TwicPics (/User/Projects/src/stories/TwicPics.jsx:13:21)
          at div
          at storyFn
      
      Consider adding an error boundary to your tree to customize error handling behavior.
      Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

      at logCapturedError (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:10989:23)
      at update.callback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11022:5)
      at callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:3662:12)
      at commitUpdateQueue (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:3683:9)
      at commitLifeCycles (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11855:11)
      at commitLayoutEffects (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14443:7)
      at HTMLUnknownElement.callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11391:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)

  ● Storyshots › Example/TwicPics › Default

    TypeError: Object.defineProperty called on non-object
        at Function.defineProperty (<anonymous>)

      at Object.setWrapper (node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/_/placeholder.ts:21:34)
      at n.componentDidMount (node_modules/@twicpics/components/react/https:/raw.githubusercontent.com/twicpics/components/0.7.0/src/react/factory.tsx:111:13)
      at commitLifeCycles (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11782:24)
      at commitLayoutEffects (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14443:7)
      at HTMLUnknownElement.callCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11391:14)
      at HTMLUnknownElement.callTheUserObjectsOperation (node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
      at innerInvokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:338:25)
      at invokeEventListeners (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:274:3)
      at HTMLUnknownElementImpl._dispatch (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:221:9)
      at HTMLUnknownElementImpl.dispatchEvent (node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:94:17)
      at HTMLUnknownElement.dispatchEvent (node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:231:34)
      at Object.invokeGuardedCallbackDev (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11440:16)
      at invokeGuardedCallback (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:11499:31)
      at commitRootImpl (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14172:9)
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2486:10)
      at commitRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:14011:3)
      at performSyncWorkOnRoot (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13440:3)
      at node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2537:26
      at unstable_runWithPriority (node_modules/scheduler/cjs/scheduler.development.js:468:12)
      at runWithPriority (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2486:10)
      at flushSyncCallbackQueueImpl (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2532:9)
      at flushSyncCallbackQueue (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:2519:3)
      at scheduleUpdateOnFiber (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:13004:9)
      at updateContainer (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:16454:3)
      at create (node_modules/react-test-renderer/cjs/react-test-renderer.development.js:17149:3)
      at getRenderedTree (node_modules/@storybook/addon-storyshots/dist/ts3.9/frameworks/react/renderTree.js:24:16)
      at node_modules/@storybook/addon-storyshots/dist/ts3.9/test-bodies.js:11:22
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/ts3.9/api/snapshotsTestsTemplate.js:47:20)

Test Suites: 2 failed, 2 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.504 s, estimated 2 s
Ran all test suites.
```

