import AdminLayout from "@/src/component/layout/client.admin";
import React, { useEffect, useRef, useState } from "react";

export default function Blogs() {
  const editorRef = useRef<any>();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  return (
    <AdminLayout>
      {editorLoaded ? (
        <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor} />
      ) : (
        "loading!..."
      )}
    </AdminLayout>
  );
}
