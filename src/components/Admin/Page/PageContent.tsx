'use client'
import {Editor} from "@tinymce/tinymce-react";
import React, {useRef, useState} from "react";
import type {Editor as TinyMCE} from 'tinymce'

interface Props {
    className?: string
}


const PageContent = ({}: Props) => {
    const [html, setHtml] = useState<string>('')
    const editorRef = useRef<TinyMCE|null>(null);
    const logContent = () => {
        if(editorRef.current) {
            const content = editorRef.current.getContent()
            console.log(content)
            setHtml(content)
        }
    }
    return (
        <>
            <Editor
                onInit={(_,editor) => (editorRef.current=editor)}
                apiKey={'02agqvxvq8cscm6dn7crdujjhi967pl0zdu9gof5et9ni1f3'} init={{
                height: '100%',
                menubar: true,
                plugins: ['link', 'table', 'paste'],
                toolbar: 'undo redo | formatselect | bold italic | link | alignleft aligncenter alignright | table'
            }}/>
            <button onClick={logContent}>Получить контент</button>
            <div dangerouslySetInnerHTML={{__html:html}}/>
        </>
    );
};
export default PageContent