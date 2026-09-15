import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  { ignores: ["dist/**", ".next/**", "node_modules/**"] },
  ...tseslint.configs.recommended,
  {
    files: ["**/*.tsx", "app/hooks/**/*.ts"],
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
);
