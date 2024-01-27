const { exec } = require('child_process');

function getTranscript(videoId) {
    return new Promise((resolve, reject) => {
        // Execute Python script as a child process

        const pythonExec = `python3 transcript.py ${String(videoId)}`;

        const pythonProcess = exec(pythonExec, (error, stdout, stderr) => {
            if (error) {
                console.error('Error executing Python script:', error);
                reject(error);
                return;
            }
            if (stderr) {
                console.error('Error output from Python script:', stderr);
                reject(stderr);
                return;
            }
            // Capture the transcript output from stdout
            resolve(stdout.trim());
        });

        // Handle Python script's exit
        pythonProcess.on('exit', (code) => {
            if (code !== 0) {
                console.error('Python script exited with non-zero code:', code);
                reject(`Python script exited with code ${code}`);
            }
        });
    });
}


export default getTranscript;



