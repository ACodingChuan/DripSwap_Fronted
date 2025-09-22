# AGENTS.md

本文件规范 AI 代理（如 Codex）在 **DripSwap** 仓库中的工作方式，确保产出可维护、可审查、可回滚。**本版聚焦 Phase 1（前端 + MSW Mock，可运行）**。

## 1) 范围与目标
- 仅实现前端基座、设计系统、工程化与 **Mock 数据层**。**禁止接入真实后端/链上**，不实现 AMM/桥接算法。
- 可验证目标：`pnpm i && pnpm dev` 可启动；`/` 与 `/swap` 可访问；最小单测与 e2e 冒烟通过。

## 2) 工作准则（Guardrails）
1. **契约优先（Contract-first）**：与后端交互的形状以 `contracts/`（OpenAPI/GraphQL/Proto）为准。Phase 1 如无确定契约，可放占位样例并在 mock 中遵循其形状。  
2. **端口/适配器分层**：业务层 **仅依赖** `src/domain/ports/*`；传输/实现细节在 `src/infrastructure/adapters/*`。**禁止** 业务层直接发 HTTP。  
3. **Mock 优先**：统一走 MSW（`src/infrastructure/mock/*`），响应需符合契约与统一错误模型。  
4. **小步提交，可回滚**：单目的提交；依赖升级独立 PR，说明影响与回滚方案；禁止大跨度一体化重构。  
5. **质量门槛**：提交前必须通过 `pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm e2e`（最小集）。  
6. **安全与隐私**：不引入非必要追踪；不提交密钥；`.env.example` 不含敏感值。  
7. **可访问性（a11y）**：控件有 label/aria；键盘可达；焦点可见；颜色对比 ≥ WCAG 2.1 AA(4.5:1)。  
8. **Phase 1 限制**：不引入钱包依赖（wagmi/viem）；不实现真实撮合/跨链；只返回固定 mock 值。

## 3) 目录约定
- `src/app/`：应用骨架、路由与页面（`/`、`/swap`、`/faucet`、`/bridge`、`/wallet`）。  
- `src/shared/`：设计系统（Button/Input/Select/Card/Dialog/Sheet/Badge/Skeleton/Toast）、icons、utils、i18n。  
- `src/domain/`：领域模型与端口接口（`models/*` 仅类型与注释；`ports/*` 仅接口与注释）。  
- `src/infrastructure/`：`http/client.ts`、`adapters/*`（实现选择由 `.env` 的 `API_IMPL` 决定）、`mock/*`（MSW handlers/server）。  
- `src/styles/`：全局样式（Tailwind 入口）。  
- `contracts/`：API/GraphQL/Proto 契约（Phase 1 可为空或样例）。

## 4) 错误模型（统一）
```ts
export type ApiError = {
  code: string;        // 机器可读，如 'QUOTE_EXPIRED'
  message: string;     // 人类可读简述（英文或占位）
  details?: Record<string, unknown>;
  traceId?: string;
  retryable?: boolean;
};
// 前端在 shared/i18n/errors.ts 映射 code -> 文案。
```

## 5) 常见工作流（给代理执行）
### A. 新增页面/路由
1. 在 `src/app/routes/` 新建 `<name>.tsx`；在路由配置/文件式路由中注册。  
2. 页面仅含 UI 骨架与交互状态，不直接发请求。数据读写统一通过 adapters（若需要 mock）。  
3. 补充最小可访问性与测试用选择器（data-testid）。

### B. 新增 API 适配器（mock）
1. 在 `contracts/` 定义/更新契约 **或** 在注释中标注字段与错误形状。  
2. 在 `src/infrastructure/mock/handlers.ts` 添加 MSW handler（成功/失败/超时分支）。  
3. 在 `src/infrastructure/adapters/` 添加 `<feature>.mock.ts` 并在 `adapters/index.ts` 导出。  
4. 在 `http/client.ts` 统一处理 baseURL、拦截、错误为 `{code,message}`。  
5. 添加对应单测（成功/失败）。

### C. 设计系统变更
1. 仅在 `src/shared/ui/*` 改动；以 props 控制变体，不下发冗长 Tailwind 类名到调用处。  
2. 添加最少一个使用示例（在 `/` 或 `/swap` 中引用）。

## 6) 测试与验收
- **单测（Vitest + RTL）**：
  - 组件：`Button` 渲染与交互（键盘/禁用态）。  
  - hooks/util：`i18n` 或格式化函数。  
- **e2e（Playwright）**：
  - 冒烟：访问 `/` → 点击进入 `/swap` → 看到占位报价文案（来自 mock）。  
- **CI/Git Hooks**：Husky + lint-staged 运行 `lint` 与 `typecheck`，阻止不合规提交。

## 7) 提交与 PR 规范
- **Commit**：`<type>(<scope>): <subject>`；常见 type：`feat` `fix` `chore` `docs` `refactor` `test` `perf` `ci`。  
- **首提交流水线**：  
  - `chore(bootstrap): init vite+react+ts, tailwind+shadcn, msw, test setup`  
- **PR 检查单**：
  - 目录与导出边界未破坏；变更附带必要文档/注释。  
  - mock 与契约一致，错误码覆盖常见分支。  
  - 新依赖评估体积/安全/维护成本，说明回滚方案。

## 8) 何时求助人类
- 契约/字段冲突或不确定；  
- 设计系统/品牌规范不明确；  
- 需要引入非白名单依赖或变更基础架构。

## 9) 工具与命令（最小集）
```bash
pnpm dev               # 本地开发
pnpm build             # 生产构建
pnpm preview           # 本地预览
pnpm typecheck         # TS 类型检查
pnpm lint              # ESLint
pnpm test              # 单测
pnpm e2e               # e2e
```
