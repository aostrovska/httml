package main

import (
	"net/http"
	"io"
	"io/ioutil"
	"fmt"
)

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
    (*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
    (*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func Handler(w http.ResponseWriter, req *http.Request) {
	setupResponse(&w, req)
	if (*req).Method == "OPTIONS" {
		w.WriteHeader(204)
	}else if req.Method == "POST" {
		data, err := ioutil.ReadAll(req.Body)
		req.Body.Close()
		if err != nil {return }
		
		fmt.Printf("%s\n", data)
		io.WriteString(w, "successful post")
	} else {
		w.WriteHeader(405)
	}

}

	

func main() {
	http.HandleFunc("/", Handler)
	
	err := http.ListenAndServe(":8080", nil)
	panic(err)
}
