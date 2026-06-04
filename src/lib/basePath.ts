export function withBasePath(path: string | undefined): string {
  if (!path) {
    return '';
  }

  if (/^(https?:|mailto:|data:)/.test(path)) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!basePath || path.startsWith(basePath)) {
    return path;
  }

  return path.startsWith('/') ? `${basePath}${path}` : `${basePath}/${path}`;
}
