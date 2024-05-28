export async function load() {
  const modules = import.meta.glob('../lib/projects/*.json');

  const projects = [];

  for (const path in modules) {
    const module = await modules[path]();
    projects.push(module.default);
  }

  return {
    projects,
  };
}
