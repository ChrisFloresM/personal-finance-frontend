import type { FormEventHandler, PropsWithChildren } from "react";

interface IFormTemplateProps {
  formName: string;
  formDescription: string;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}

function FormTemplate({
  formName,
  formDescription,
  handleSubmit,
  children,
}: PropsWithChildren<IFormTemplateProps>) {
  return (
    <div className="w-full space-y-250">
      <h2 className="text-preset-2 leading-preset-2 sm:text-preset-1 sm:leading-preset-1 text-grey-900">
        {formName}
      </h2>
      <p className="text-preset-4 leading-preset-4 text-grey-500 font-light">
        {formDescription}
      </p>
      <form className="flex flex-col gap-200" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
}

export default FormTemplate;
