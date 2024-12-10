import * as React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';


const NAVIGATION = [
  {
    kind: 'header',
    title: 'العناصر الرئيسية',
  },
  {
    segment: 'dashboard',
    title: 'لوحة التحكم',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'الطلبات',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'التحليلات',
  },
  {
    segment: 'reports',
    title: 'التقارير',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'المبيعات',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'حركة المرور',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'التكاملات',
    icon: <LayersIcon />,
  },
];

const theme = createTheme({
  direction: 'rtl', // إضافة اتجاه النص من اليمين إلى اليسار
  typography: {
    fontFamily: 'Tajawal, Arial, sans-serif', // اختيار خط مناسب
  },
  colorSchemes: { light: true, dark: true },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={theme}
        window={demoWindow}
      >
          <DashboardLayout>
            <PageContainer>
              <Grid container spacing={2} alignItems="center">
                {/* لوجو الموقع */}
                <Grid item xs={12} container justifyContent="center">
                  <Box sx={{ width: 200, height: 60, backgroundImage: 'url(/../logo.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                </Grid>


                {/* صورة المستخدم واسم العميل وعدد الباقات */}
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                  <Avatar
                    src="https://via.placeholder.com/150"
                    alt="User Avatar"
                    sx={{ width: 100, height: 100 }}
                  />
                  <Box sx={{ ml: 11 }}>
                    <tr>
                    <Typography variant="h6">اسم العميل: أحمد محمد</Typography>
                    <Typography variant="subtitle1">عدد الباقات: 5</Typography>
                  </tr>
                  </Box>
                </Grid>

                {/* مسافة بين الصورة وحقول النص */}
                <Grid item xs={12}>
                  <hr />
                </Grid>

                {/* حقل البريد الإلكتروني قابل للتعديل */}
                <Grid item xs={12}>
                  <TextField
                    label="البريد الإلكتروني"
                    fullWidth
                    variant="outlined"
                    type="email"
                  />
                </Grid>

                {/* حقل كلمة المرور قابل للتعديل */}
                <Grid item xs={12}>
                  <TextField
                    label="كلمة المرور"
                    fullWidth
                    variant="outlined"
                    type="password"
                  />
                </Grid>

                {/* محتوى إضافي */}
                <Grid item xs={12}>
                  <Skeleton height={14} />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton height={150} />
                </Grid>
              </Grid>
            </PageContainer>
          </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
