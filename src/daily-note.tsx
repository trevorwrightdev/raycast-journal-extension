import { Form, ActionPanel, Action, showToast, popToRoot } from "@raycast/api";
import addEntry from "./utils/add-entry";
type Values = {
  entry: string;
};

export default function Command() {
  async function handleSubmit(values: Values) {
    addEntry(values.entry)
    await showToast({ title: "Entry saved" });
    await popToRoot();
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.TextArea id="entry" title="Entry" placeholder="Jot down your thoughts..."/>
    </Form>
  );
}