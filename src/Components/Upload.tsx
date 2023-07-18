import { useEffect, useRef, useState } from "react";
import { firestore, storage } from "../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Button } from "flowbite-react";
import Progress from "./Progress";
import { doc, setDoc } from "firebase/firestore";
const Upload = () => {
  const initialState = {
    MovieName: "",
    Des: "",
    ActorName: "",
    ReleaseDate: "",
    ProducerName: "",
  };
  const imageRef = useRef<any>();
  const videoRef = useRef<any>();
  const [input, setInput] = useState(initialState);
  const [isInputImgDisabled, setIsInputImgDisabled] = useState(false);
  const [isInputVidDisabled, setIsInputVidDisabled] = useState(false);
  const [percent, setPercent] = useState(Number);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [status, setStatus] = useState(true);

  useEffect(() => {
    validate();
  }, [input, image, video]);
  function resetPercentage() {
    setPercent(0);
  }
  function handleChange(e: any) {
    const name = e.name;
    const data = e.value;
    setInput({ ...input, [name]: data });
  }

  function handleSubmit() {
    saveDetails();
  }

  function validate() {
    if (
      input.MovieName.trim() &&
      input.ActorName.trim() &&
      input.Des.trim() &&
      input.ProducerName.trim() &&
      input.ReleaseDate.trim() &&
      image.trim() &&
      video.trim()
    ) {
      setStatus(false);
    }
  }

  function saveDetails() {
    try {
      const data = {
        input,
        image,
        video,
      };
      saveItem({ ...data });
      setTimeout(() => {
        alert("Successfully uploaded");
        setStatus(true);
      }, 1000);
      setInput(initialState);
      imageRef.current.value = null;
      videoRef.current.value = null;
    } catch (error) {
      console.log(error);
    }
  }

  function handleFile(file: any) {
    if (file[0].type.includes("image")) {
      setIsInputVidDisabled(true);
      const storageRef = ref(storage, `Images/${Date.now()}-${file[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, file[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err, "err occured"),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImage(url);
            setIsInputVidDisabled(false);
            resetPercentage();
            validate();
          });
        }
      );
    } else {
      setIsInputImgDisabled(true);
      const storageRef = ref(storage, `videos/${Date.now()}-${file[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, file[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          // update progress
          setPercent(percent);
        },
        (err) => console.log(err, "err occured"),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setVideo(url);
            setIsInputImgDisabled(false);
            resetPercentage();
            validate();
          });
        }
      );
    }
  }
  async function saveItem(data: any) {
    await setDoc(doc(firestore, "Movies", `${Date.now()}`), data, {
      merge: true,
    })
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  return (
    <div className="w-full h-full bg-black flex justify-center items-center pt-5 pb-5">
      <div className="w-850 h-900 border-dashed border-2 p-3 bg-slate-600">
        {percent > 0 && <Progress progress={percent} />}
        <div className="m-3">
          <input
            type="text"
            name="MovieName"
            placeholder="Movie name"
            className="w-full p-3 text-black"
            autoFocus
            value={input.MovieName}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            name="ActorName"
            placeholder="Actor name"
            className="w-full p-3 text-black"
            value={input.ActorName}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            name="ReleaseDate"
            placeholder="Release date"
            className="w-full p-3 text-black"
            value={input.ReleaseDate}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="m-3">
          <input
            type="text"
            placeholder="Producer"
            name="ProducerName"
            className="w-full p-3 text-black"
            value={input.ProducerName}
            onChange={(e) => handleChange(e.target)}
          />
        </div>
        <div className="m-3">
          <textarea
            name="Des"
            id=""
            placeholder="Type your des.."
            className="w-full h-40 text-black"
            value={input.Des}
            onChange={(e) => handleChange(e.target)}
          ></textarea>
        </div>
        <div className="m-3">
          <input
            disabled={isInputImgDisabled}
            type="file"
            ref={imageRef}
            name="images"
            className=" p-3 text-black"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files)}
          />
        </div>
        <div className="m-3">
          <input
            disabled={isInputVidDisabled}
            type="file"
            ref={videoRef}
            name="movies"
            className=" p-3 text-black"
            accept="video/*"
            onChange={(e) => handleFile(e.target.files)}
          />
        </div>
        <div className="m-3 flex justify-end gap-3">
          <Button
            className="!bg-red-400"
            onClick={() => {
              setInput(initialState);
              imageRef.current.value = null;
              videoRef.current.value = null;
            }}
          >
            Cancel
          </Button>
          <Button disabled={status} onClick={handleSubmit}>
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
