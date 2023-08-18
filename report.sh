#!/bin/bash

# CHANGE ME ########################
CHROME_PATH="/bin/microsoft-edge-stable" # path to Chrome/Chromium executable
####################################

# don't change anything below, or change at your own risk
current_date=$(date +"%Y-%m-%d-%T")
port=""

function report(){
    CHROME_PATH=$CHROME_PATH lighthouse "http://localhost:${port}/" --output html --output-path "reports/${current_date}.html" --view --chrome-flags="--headless"
}

type lighthouse >/dev/null 2>&1 || { echo >&2 "lighthouse not found"; echo >&2 "See https://github.com/GoogleChrome/lighthouse#using-the-node-cli for installation."; exit 1; }

if [ ! -d "reports" ]; then
    mkdir reports
fi

while getopts 'p:' flag; do
    case "${flag}" in
        p)
            port="${OPTARG}"
            report
            exit
            ;;
        *)
            echo "Unknown flag: ${flag}"
            exit 1
            ;;
    esac
done

echo "USAGE: ./report.sh -p <port_number>"
