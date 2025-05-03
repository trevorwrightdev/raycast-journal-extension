import { Form, ActionPanel, Action, showToast, popToRoot } from "@raycast/api";
import addEntry from "./utils/add-entry";
import postTweet from "./utils/tweet";

type Values = {
  entry: string;
  tweet: boolean;
};

export default function Command() {
  async function handleSubmit(values: Values) {
    addEntry(values.entry, values.tweet)
    if (values.tweet) {
      postTweet(values.entry);
    }
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
      <Form.Checkbox id="tweet" label="Tweet this" />
    </Form>
  );
}