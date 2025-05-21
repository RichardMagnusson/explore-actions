import core from '@actions/core';
import github from '@actions/github';
import exec from '@actions/exec';

function run() {
    // 1) Get input values
    const bucket = core.getInput('bucket', { required: true });
    const region = core.getInput('region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    const uploadCommand = `aws s3 sync ${distFolder} s3://${bucket} --region ${region}`;  
    exec.exec(uploadCommand);  

    core.notice('Starting deploy-s3-javascript action');
}

run();