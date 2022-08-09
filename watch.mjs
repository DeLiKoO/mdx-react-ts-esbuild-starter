import esbuild from 'esbuild';
import config from './.esbuildrc.mjs';
import process from 'node:process';
import childProcess from 'node:child_process';

let serverProcess = undefined;

function createServerProcess() {
  serverProcess = childProcess.spawn(
    "node",
    [
      ".yarn/releases/yarn-3.2.2.cjs",
      "exec",
      "http-server",
      "-c-1",
      "public"
    ]
  );
  console.log("Running development server on port 8080...");
}

esbuild.build({
  ...config,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('eslint build failed:', error)
      else {
        console.log('esbuild result:', result)
        if(serverProcess !== undefined) {
          serverProcess.kill('SIGINT');
          serverProcess = undefined;
        }
        createServerProcess();
      }
    },
  },
}).then(() => {
  createServerProcess();
}).catch(() => process.exit(1))

