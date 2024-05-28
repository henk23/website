import fs from 'fs';
import path from 'path';

export async function load() {
  const projectsDir = path.join(import.meta.dirname, '../lib/projects');

  let files = fs.readdirSync(projectsDir);

  // Sort descending
  files.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);

  files = files.map(file => {
    return path.join(projectsDir, file);
  });

  const projects = [];

  for(let file of files) {
    const project = (await import(file)).default;
    projects.push(project);
  }

  return {
    projects,
  };
}
