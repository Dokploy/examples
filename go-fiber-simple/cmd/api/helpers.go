package main

import (
	"encoding/json"
	"net/http"
)

// The writeJSON() method is a generic helper for writing JSON to a response
func (app *application) writeJSON(w http.ResponseWriter, sCode int, data any, headers http.Header) error {
	marshalledJson, err := json.Marshal(data)

	if err != nil {
		return err
	}

	// Valid json requires newline
	marshalledJson = append(marshalledJson, '\n')

	for key, value := range headers {
		w.Header()[key] = value
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(sCode)
	w.Write(marshalledJson)

	return nil
}
