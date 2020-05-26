## How to build and run pdtest

### Install and activate Emscripten
The recommended way to install Emscripten is to install directly from the Emscripten repo with git. Open a terminal at the location where you want the emsdk to be installed and run the followings commands:
```
git clone https://github.com/emscripten-core/emsdk
cd emsdk
./emsdk install latest-fastcomp
./emsdk activate latest-fastcomp
source ./emsdk_env.sh
```

### Build pdtest using Make
```
cd path/to/pdtest
make clean && make
```

### Run pdtest in a browser
```
python -m SimpleHTTPServer 8080
```
Open your browser and visit http://localhost:8080/

### References
https://openframeworks.cc/setup/emscripten/
https://mathr.co.uk/empd/


