import { THEME_NAMES, ThemeNameType } from "@/tailwind-config/theme.constants";
import { StoryObj } from "@storybook/nextjs";
import { ComponentProps } from "react";
import { useMemo, useState } from "storybook/internal/preview-api";
import ThemeWrapper from "../ThemeWrapper";
import { ICON_VARIANTS, IconName } from "./Icon.registry";
import { ICON_SIZES, ICON_TYPES, IconSize, IconType } from "./Icon.types";
import Icon from "./index";

type StoryArgs = ComponentProps<typeof Icon> & {
  theme?: ThemeNameType;
};

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(ICON_VARIANTS),
    },
    size: {
      control: "select",
      options: ICON_SIZES,
    },
    type: {
      control: "select",
      options: ICON_TYPES,
    },
    theme: {
      control: 'select',
      options: THEME_NAMES,
    },
    'aria-label': {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: StoryArgs) => {
    const { theme, ...componentArgs } = args;
    const content = <Icon className="text-primary" {...componentArgs} />;

    return <ThemeWrapper theme={theme || 'theme-white'}>
      <div className="surface-l0 flex justify-center px-md py-4xl">
        {content}
      </div>
    </ThemeWrapper>;
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "add-column-left",
    size: 16,
    type: "filled",
  },
};

export const Gallery: Story = {
  args: {
    size: 16 as IconSize,
    type: "outlined" as IconType,
    name: "add-column-left",
  },
  render: (args) => {
    const [q, setQ] = useState("");
    const names = useMemo(() => {
      const all = Object.keys(ICON_VARIANTS);
      const query = q.trim().toLowerCase();

      if (!query) return all.sort();
      return all.filter((n) => n.toLowerCase().includes(query)).sort();
    }, [q]);

    return (
      <ThemeWrapper theme={args.theme || 'theme-gray'}>
        <div className="flex flex-col gap-4">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search icons…"
              className="w-[280px] rounded-10 border border-solid border-black/15 bg-white px-3 py-2 text-sm outline-none focus:border-black/30 focus:ring-2 focus:ring-black/10"
            />
            <div className="text-xs text-black/60">
              Showing <span className="font-medium text-black/80">{names.length}</span> icons
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3">
            {names.map((name) => (
              <div
                key={name}
                className="surface-l0 text-primary flex flex-col gap-2 rounded-10 border border-solid border-gray-100 bg-white p-3 shadow-sm"
              >
                {/* Icon row */}
                <div className="flex items-center gap-2 text-primary">
                  {(["outlined", "filled"] as const).flatMap((t) =>
                    <Icon
                      key={`${t}-${args.size}`}
                      name={name as IconName}
                      size={args.size}
                      type={t}
                      className="text-primary"
                    />
                  )}
                </div>

                {/* Labels */}
                <div className="text-xs leading-tight">
                  <div className="text-primary font-semibold">{name}</div>
                  <div className="text-secondary">
                    {args.size}px
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ThemeWrapper>
    );
  },
  argTypes: {
    size: { control: "select", options: ICON_SIZES },
    type: { control: "select", options: ICON_TYPES },
  },
};
