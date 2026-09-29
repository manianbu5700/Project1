# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> Page Object Model
- Location: tests\pom.spec.js:4:5

# Error details

```
Error: browserType.launch: Target page, context or browser has been closed
Browser logs:

<launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
<launched> pid=28380
Call log:
  - <launching> C:\Users\Manikandan\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --headless --no-startup-window
  - <launched> pid=28380
  - [pid=28380] <gracefully close start>
  - [pid=28380] <kill>
  - [pid=28380] <will force kill>
  - [pid=28380] taskkill stderr: ERROR: The process "28380" not found.
  - [pid=28380] <process did exit: exitCode=3236495362, signal=null>
  - [pid=28380] starting temporary directories cleanup
  - [pid=28380] finished temporary directories cleanup
  - [pid=28380] <gracefully close end>

```