"use client";

interface ErrorMessejProps {
  error: Error;
  reset: () => void;
}

function ErrorMessej({ error, reset }: ErrorMessejProps) {
 

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>Error.Dyrka</p>

      <button
        type="button"
        onClick={()=>reset()}
        style={{
          padding: "10px 20px",
            cursor: "pointer",
            marginTop: "10px",
            borderRadius: "80px",
          
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ErrorMessej;