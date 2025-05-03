import fs from 'fs';
import path from 'path';

const pathToFolder = path.join((process.env.HOME || process.env.USERPROFILE)!, 'Documents/Obsidian Vault/Journal');

function addEntry(text: string) {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];
  const fileName = `${formattedDate}.md`;
  const filePath = path.join(pathToFolder, fileName);

  const currentTime = today.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  const newText = `${currentTime}: ${text}\n`;

  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf-8');
    fs.writeFileSync(filePath, existingContent + '\n' + newText);
  } else {
    fs.writeFileSync(filePath, newText);
  }
}

export default addEntry;

