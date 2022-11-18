'use client'
import React, { useEffect, useState } from 'react'
import '@wangeditor/editor/dist/css/style.css'
import {Editor,Toolbar} from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig,Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'


const index = () => {
    Boot.registerModule(markdownModule)
    const [editor, setEditor] = useState<IDomEditor | null>(null) 
    const [html, setHtml] = useState('<p>hello</p>')
    useEffect(() => {
        setTimeout(() => {
            setHtml('<p>hello world</p>')
        }, 1500)
    }, [])
    const toolbarConfig: Partial<IToolbarConfig> = { }  // TS 语法

    // 编辑器配置
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...',
    }

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])
    return (
        <div className='prose max-w-none max-h-none h-full'>
            <div className='h-full border'>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor className='h-full scrollbar scrollbar-none overflow-hidden border-b'
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                />
            </div>
        </div>
    )
}

export default index