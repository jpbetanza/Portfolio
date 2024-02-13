import { useTranslation } from "react-i18next";

const IntroductionText = () => {
    const {t} = useTranslation()
    return(
        <div className="sm:p-5 flex flex-col gap-4">
            <h1 className="text-white text-3xl sm:text-5xl select-none"> {t('introductionTitle')} </h1>
            <p className="text-white select-none"> {t('introductionText1')} </p>
            <p className="text-white select-none"> {t('introductionText2')} </p>
        </div>
    )
}
export default IntroductionText