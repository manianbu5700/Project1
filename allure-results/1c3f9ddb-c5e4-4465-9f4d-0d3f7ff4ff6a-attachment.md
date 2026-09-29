# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: windowHandling.spec.js >> Verify amazon applcation
- Location: tests\windowHandling.spec.js:3:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
<launched> pid=10964
Call log:
  - <launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
  - <launched> pid=10964
  - [pid=10964] <gracefully close start>
  - [pid=10964] <kill>
  - [pid=10964] <will force kill>
  - [pid=10964] taskkill stderr: ERROR: The process "10964" not found.
  - [pid=10964] <process did exit: exitCode=3236495362, signal=null>
  - [pid=10964] starting temporary directories cleanup
  - [pid=10964] finished temporary directories cleanup
  - [pid=10964] <gracefully close end>

```