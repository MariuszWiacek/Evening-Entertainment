import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Email() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
    <p>Send your feedback to developers</p>
      <Editor
        apiKey = 'ktz0338w1bd1r04yq8sagnn0n60utu678c94ivynuztxy4q4'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is my feedback on the app</p>"
        init={{
          height: 300,
          width:600,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Send an email!</button>
    </>
  );
}