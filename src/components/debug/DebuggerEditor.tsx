/**
 * Written w/ codemirror v6
 */
import { EditorState } from "@codemirror/state";
import { basicSetup, EditorView } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { Component } from "solid-js";

let startState = EditorState.create({
  doc: "Hello World",
  extensions: [keymap.of(defaultKeymap)],
});

let view = new EditorView({
  state: startState,
  extensions: [basicSetup, javascript()],
  parent: document.body,
});

export const DebuggerEditor: Component = () => {

  return (
    <></>
  )
}