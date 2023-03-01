import emptyStyle from "src/styles/Empty.module.css";
import folder from "src/assets/icons/Folder 1.svg";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

const Main = () => {
	const onDrop = useCallback((acceptedFiles: File[]) => {
		console.log(acceptedFiles);
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	return (
		<main className={emptyStyle.main}>
			<form className={emptyStyle.form} {...getRootProps()}>
				<img src={folder} alt="" />
				<label className={emptyStyle.label} htmlFor="file">
					Drag & drop your file here or <span>Browse file</span>
				</label>
				<input
					{...getInputProps()}
					type="file"
					id="file"
					accept=".doc,.docx,.pdf,.odt,.html,.rtf,.txt"
					className={emptyStyle.input}
				/>
				<span className={emptyStyle.info}>
					Support (doc, docx, pdf, odt, html, rtf and txt)
				</span>
			</form>
			<button className={emptyStyle.button}>Skip for now</button>
		</main>
	);
};

export default Main;
