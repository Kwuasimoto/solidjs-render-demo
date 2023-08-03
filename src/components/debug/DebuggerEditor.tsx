/**
 * Written w/ codemirror v6
 */
import { basicSetup, EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { defaultKeymap } from "@codemirror/commands";
import {
  highlightActiveLine,
  highlightSpecialChars,
  keymap,
} from "@codemirror/view";
import {
  bracketMatching,
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { javascript } from "@codemirror/lang-javascript";
import { Component, createEffect, createSignal } from "solid-js";
import { Logger } from "@services";
import { CodeMirrorProps } from "@types";

export const DebuggerEditor: Component<CodeMirrorProps> = (props) => {
  const logger = new Logger("DebuggerEditor");
  const [editorEl, setEditorEl] = createSignal<HTMLElement | null>(null);

  createEffect(() => {
    if (editorEl() == null) return;

    const extensions = [
      basicSetup,
      keymap.of(defaultKeymap),
      syntaxHighlighting(defaultHighlightStyle),
      props.onChange,
      javascript(),
      highlightSpecialChars(),
      highlightActiveLine(),
      bracketMatching(),
    ];

    const startState = EditorState.create({
      doc: "// Enter Request Body Here.",
      extensions,
    });

    const view = new EditorView({
      extensions,
      state: startState,
      parent: editorEl()!,
    });

    return () => {
      view.destroy();
    };
  });

  return (
    <section
      class="max-h-[164px] pt-1 text-gray-300"
      ref={setEditorEl}
    ></section>
  );
};
