import type { AtRule, Declaration, Rule } from "postcss";
import postcss from "postcss";

export function cssToRegistryObject(css: string): Record<string, unknown> {
  const root = postcss.parse(css);
  const result: Record<string, unknown> = {};

  for (const node of root.nodes) {
    if (node.type === "atrule") {
      mergeAtRule(result, node);
      continue;
    }
    if (node.type === "rule") {
      mergeRule(result, node);
    }
  }

  return result;
}

function atRuleKey(node: AtRule): string {
  if (node.name === "import") {
    return `@import ${node.params}`;
  }
  return node.params ? `@${node.name} ${node.params}` : `@${node.name}`;
}

function mergeAtRule(target: Record<string, unknown>, node: AtRule): void {
  const key = atRuleKey(node);
  if (!node.nodes?.length) {
    target[key] = {};
    return;
  }

  const block: Record<string, unknown> = {};
  for (const child of node.nodes) {
    if (child.type === "decl") {
      mergeDecl(block, child);
    } else if (child.type === "rule") {
      mergeRule(block, child);
    } else if (child.type === "atrule") {
      mergeAtRule(block, child);
    }
  }
  target[key] = block;
}

function mergeRule(target: Record<string, unknown>, node: Rule): void {
  const selector = node.selector.trim();
  const existing = target[selector];
  const block =
    existing && typeof existing === "object"
      ? { ...(existing as Record<string, unknown>) }
      : {};

  for (const child of node.nodes ?? []) {
    if (child.type === "decl") {
      mergeDecl(block, child);
    } else if (child.type === "atrule") {
      mergeAtRule(block, child);
    } else if (child.type === "rule") {
      mergeRule(block, child);
    }
  }

  target[selector] = block;
}

function mergeDecl(target: Record<string, unknown>, node: Declaration): void {
  if (node.prop.startsWith("@apply ")) {
    target[`@apply ${node.value}`] = {};
    return;
  }
  target[node.prop] = node.value;
}
