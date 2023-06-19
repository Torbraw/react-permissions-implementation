if (featureName) {
  const featureEnabled = isFeatureEnabled(featureName);
  if (!featureEnabled) {
    switch (actionType) {
      case 'redirect':
        return <Navigate to={currentUserHomePage}></Navigate>;
      case 'hide':
        return <></>;
      default:
        return <></>;
    }
  }
}
