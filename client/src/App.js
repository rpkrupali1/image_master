import logo from "./logo.svg";
import "./App.css";
import UploadImage from "./UploadImage";

function App() {
  const handleUpload = async (e) => {
    e.preventDefault();
    const file = e.target.querySelector('input[type="file"]').files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
      }
    }
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>Image Processing App</h1>
      <UploadImage onUpload={handleUpload} />
    </div>
  );
}

export default App;
