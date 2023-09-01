#!/bin/bash

# CHANGE ME ########################
CHROME_PATH="" # path to Chrome/Chromium executable
####################################

# don't change anything below, or change at your own risk
routes=("" "about" "menu" "blog" "contact")
current_date=$(date +"%Y-%m-%d-%T")
port=""

function report(){
    local route="$1"
    CHROME_PATH=$CHROME_PATH lighthouse "http://localhost:${port}/#/${route}" --output html --output-path "reports/${route}-${current_date}.html" --view --chrome-flags="--headless"
}

function generate_reports(){
    for element in "${routes[@]}"; do
        report "$element"
    done
}

type lighthouse >/dev/null 2>&1 || { echo >&2 "lighthouse not found"; echo >&2 "See https://github.com/GoogleChrome/lighthouse#using-the-node-cli for installation."; exit 1; }

if [ ! -d "reports" ]; then
    mkdir reports
fi

while getopts 'p:' flag; do
    case "${flag}" in
        p)
            port="${OPTARG}"
            generate_reports
            exit
            ;;
        *)
            echo "Unknown flag: ${flag}"
            ;;
    esac
done

echo "USAGE: ./report.sh -p <port_number>"
exit 1
