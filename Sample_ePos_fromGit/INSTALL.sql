/* EXECUTED ONLY WHEN THE OPTION IS INSTALLED */
@FMT(CMP,@WIZGET(INSTALL_STEP)<3,'®FMT(CHR,26)');

/* COPY EPOS DEMO APP */
@EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\Htm\ePos\*.*" "@OfficeHtm\ePos\" /E /Y');
@EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\Htm\ePos-es\*.*" "@OfficeHtm\ePos-es\" /E /Y');
@EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\Htm\ePos-fr\*.*" "@OfficeHtm\ePos-fr\" /E /Y');

/* ON FIRST LOAD COPY DEMO SENCHA DYNA VIEW  */
@FMT(CMP,@wizGet(INSTALL_TYPE)>=2,'®EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\FirstLoad\Htm\Dyna\*.*" "@OfficeHtm\Dyna\" /E /Y');')

/* COPY CUSTOM SENCHA DYNA VIEWS - DO NOT ALTER */
@EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\Htm\Dyna\*.*" "@OfficeHtm\Dyna\" /E /Y');

/* EXIT IF BASE IS NOT INSTALLED */
@fmt(CMP,@dbHot(FindFirst,@OfficeHtm\dev\ePos\app\Application.js)=,'®fmt(CHR,26)');

/* COPY THE SITE FORMS TO THE DEV FOLDERS */
@EXEC(EXE='xcopy.exe "@RUNSamples\@WIZGET(INSTALL_OPTION)\Htm\dev\*.*" "@OfficeHtm\dev\" /E /Y');

/* EXECUTE BUILD-DEV (ENGLISH VERSION) */    
@EXEC(EXE='@OfficeHtm\dev\ePos_Site_en\build-dev.bat @Office');

/* RESULT */
@WIZRPL(DIR=@OfficeHtm\dev\ePos\);
@WIZRPL(FILE=BUILD.TXT);
@FMT(CMP,'@msgFILE(FINDINFILE,[ERR])=','®WIZRPL(SUBJECT=SENCHA BUILD SUCCESS)','®WIZRPL(X-PRIORITY=1)®WIZRPL(SUBJECT=SENCHA BUILD ERROR)');
@WIZCLR(DIR);
@WIZCLR(FILE);

@WIZRPL(TARGET=@TER);
@EXEC(SQT=@OfficeHtm\dev\ePos\BUILD.TXT);

/* 1.SWITCHES FOR (ePos_fromGit_BTN) - DO NOT ALTER */
@FMT(CMP,@WIZISBLANK(INSTALL_SILENT)=1,'®WIZRPL(INSTALL_SILENT=0)');
@FMT(CMP,@WIZGET(INSTALL_TYPE)@WIZGET(INSTALL_SILENT)=20,'®WIZCLR(ePos_fromGit_BTN)','®WIZSET(ePos_fromGit_BTN=®dbHot(Samples.ini,[SWITCHES]ePos_fromGit_BTN))');
@FMT(CMP,@WIZGET(ePos_fromGit_BTN)=,'®WIZCLR(ePos_fromGit_BTN)®WIZRPL(INSTALL_RESULT=4)');
/* End */
/* 2.HANDLING FOR (ePos_fromGit_BTN) - DO NOT ALTER */
@FMT(CMP,@WIZGET(INSTALL_SILENT)<1,'®WIZCLR(INSTALL_RESULT)');
@FMT(CMP,@WIZGET(INSTALL_SILENT)>=@WIZGET(INSTALL_RESULT),'®WIZCLR(INSTALL_RESULT)','®FMT(CHR,27)');
/* End */
/* 3.PROMPT FOR (ePos_fromGit_BTN) - DO NOT ALTER */
@WIZINIT;
@WIZMENU(ePos_fromGit_BTN=What type of button pages do you want to use?,
Bistro=RESTO,
Grocery=STD);
@WIZDISPLAY;
/* End */
/* 4.INSTALL FOR (ePos_fromGit_BTN) - DO NOT ALTER */
@WizRpl(args="@RUNSamples\@WIZGET(INSTALL_OPTION)\@wizGet(ePos_fromGit_BTN)\Htm\*.*" "@OfficeHtm\" /E /Y);
@FMT(CMP,@wizGet(ePos_fromGit_BTN)<>,"@EXEC(EXE='xcopy.exe @WIZGET(args)')");
/* End */
/* 5.VERIFY ONLY - DO NOT ALTER */
@FMT(CMP,@WIZGET(INSTALL_STEP)<3,'®FMT(CHR,26)');
/* End */
/* 6.SAVE FOR (ePos_fromGit_BTN) - DO NOT ALTER */
@WIZRPL(Samples.ini[SWITCHES]ePos_fromGit_BTN=@WIZGET(ePos_fromGit_BTN));
@DBHOT(Samples.ini,SET,Samples.ini[*);
/* End */
